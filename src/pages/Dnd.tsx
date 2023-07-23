import { useState } from "react";
import styled from "styled-components";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { Header, Main, Footer } from "@/components/layouts";

interface ITask {
  id: string;
  Task: string;
  Due_Date: string;
}

interface IColumn {
  title: string;
  items: ITask[]; // IData라는 타입은 해당 코드에서 정의되지 않았으므로, any로 가정합니다.
}

interface IColumnsFromBackend {
  [columnId: string]: IColumn;
}

const data = [
  {
    id: "1",
    Task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.",
    Due_Date: "25-May-2020",
  },
  {
    id: "2",
    Task: "Fix Styling",
    Due_Date: "26-May-2020",
  },
  {
    id: "3",
    Task: "Handle Door Specs",
    Due_Date: "27-May-2020",
  },
  {
    id: "4",
    Task: "morbi",
    Due_Date: "23-Aug-2020",
  },
  {
    id: "5",
    Task: "proin",
    Due_Date: "05-Jan-2021",
  },
];

const columnsFromBackend = {
  ["685c36a2-26b3-49e5-9d26-f9914f5c00c9"]: {
    title: "To-do",
    items: data,
  },
  ["6aac4519-4a08-400c-9566-c193cd884c3a"]: {
    title: "In Progress",
    items: [],
  },
  ["2994497a-21c0-464e-9cd1-e2829cbba01a"]: {
    title: "Done",
    items: [],
  },
};

const Container = styled.div`
  display: flex;
`;

const TaskList = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  background: #f3f3f3;
  min-width: 341px;
  border-radius: 5px;
  padding: 15px 15px;
  margin-right: 45px;
`;

const TaskColumnStyles = styled.div`
  margin: 8px;
  display: flex;
  width: 100%;
  min-height: 80vh;
`;

const Title = styled.span`
  color: #10957d;
  background: rgba(16, 149, 125, 0.15);
  padding: 2px 10px;
  border-radius: 5px;
  align-self: flex-start;
`;

const DndPage = () => {
  const [columns, setColumns] =
    useState<IColumnsFromBackend>(columnsFromBackend);

  const onDragEnd = (
    result: DropResult,
    columns: IColumnsFromBackend,
    setColumns: React.Dispatch<React.SetStateAction<IColumnsFromBackend>>
  ) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <>
      <Header />
      <Main>
        <h1 className="text-center text-clamp my-12">Dashboard</h1>
        <div className="p-5">
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
          >
            <Container>
              <TaskColumnStyles>
                {Object.entries(columns).map(([columnId, column]) => {
                  return (
                    <Droppable key={columnId} droppableId={columnId}>
                      {(provided) => (
                        <TaskList
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                        >
                          <Title>{column.title}</Title>
                          {column.items.map((item, index) => (
                            <TaskCard key={item.id} item={item} index={index} />
                          ))}
                          {provided.placeholder}
                        </TaskList>
                      )}
                    </Droppable>
                  );
                })}
              </TaskColumnStyles>
            </Container>
          </DragDropContext>
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default DndPage;

// TaskCard

const TaskInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 15px;
  min-height: 106px;
  border-radius: 5px;
  max-width: 311px;
  background: white;
  margin-top: 15px;

  .secondary-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
    font-weight: 400px;
    color: #7d7d7d;
  }
`;

const TaskCard = ({ item, index }: { item: ITask; index: number }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskInformation>
            <p>{item.Task}</p>
            <div className="secondary-details">
              <p>
                <span>
                  {new Date(item.Due_Date).toLocaleDateString("en-us", {
                    month: "short",
                    day: "2-digit",
                  })}
                </span>
              </p>
            </div>
          </TaskInformation>
        </div>
      )}
    </Draggable>
  );
};
