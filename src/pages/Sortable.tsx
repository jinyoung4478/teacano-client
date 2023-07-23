import { FC, useState } from "react";
import styled from "styled-components";
import { ReactSortable, SortableOptions } from "react-sortablejs";
import { Header, Main, Footer } from "@/components/layouts";

interface Block {
  id: number;
  content: string;
  parent_id: number | null;
  type: string;
  children?: Block[];
  width?: number;
}

interface IBlockItem {
  block: Block;
  blockIndex: any;
  setBlocks: React.Dispatch<React.SetStateAction<Block[]>>;
}

const StyledBlockWrapper = styled.div`
  position: relative;
  display: block;
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-radius: 4px;
  cursor: move;
`;

const sortableOptions: SortableOptions = {
  animation: 150,
  fallbackOnBody: true,
  swapThreshold: 0.65,
  ghostClass: "ghost",
  group: "shared",
  forceFallback: true,
};

function Container({ block, blockIndex, setBlocks }: IBlockItem) {
  return (
    <>
      <ReactSortable
        key={block.id}
        list={block.children}
        setList={(currentList) => {
          setBlocks((sourceList) => {
            const tempList = [...sourceList];
            const _blockIndex = [...blockIndex];
            const lastIndex = _blockIndex.pop();
            const lastArr = _blockIndex.reduce(
              (arr, i) => arr[i]["children"],
              tempList
            );
            lastArr[lastIndex]["children"] = currentList;
            return tempList;
          });
        }}
        {...sortableOptions}
      >
        {block.children &&
          block.children.map((childBlock, index) => {
            return (
              <BlockWrapper
                key={childBlock.id}
                block={childBlock}
                blockIndex={[...blockIndex, index]}
                setBlocks={setBlocks}
              />
            );
          })}
      </ReactSortable>
    </>
  );
}

function BlockWrapper({ block, blockIndex, setBlocks }: IBlockItem) {
  if (block.type === "container") {
    return (
      <StyledBlockWrapper>
        container: {block.content}
        <Container
          block={block}
          setBlocks={setBlocks}
          blockIndex={blockIndex}
        />
      </StyledBlockWrapper>
    );
  }

  return <StyledBlockWrapper>text: {block.content}</StyledBlockWrapper>;
}

const INIT_BLOCKS = [
  {
    id: 1,
    content: "item 1",
    parent_id: null,
    type: "container",
    children: [
      {
        id: 2,
        content: "item 2",
        width: 3,
        type: "container",
        parent_id: 1,
        children: [],
      },
      {
        id: 3,
        content: "item 3",
        width: 3,
        type: "container",
        parent_id: 1,
        children: [],
      },
    ],
  },
  {
    id: 4,
    content: "item 4",
    parent_id: null,
    type: "container",
    children: [
      {
        id: 5,
        content: "item 5",
        width: 3,
        parent_id: 4,
        type: "container",
        children: [
          {
            id: 8,
            content: "item 8",
            width: 6,
            type: "container",
            parent_id: 5,
            children: [],
          },
          {
            id: 9,
            content: "item 9",
            width: 6,
            type: "container",
            parent_id: 5,
            children: [],
          },
        ],
      },
      {
        id: 6,
        content: "item 6",
        width: 2,
        type: "container",
        parent_id: 4,
        children: [],
      },
    ],
  },
];

const SortablePage: FC = () => {
  const [blocks, setBlocks] = useState<Block[]>(INIT_BLOCKS);

  return (
    <>
      <Header />
      <Main>
        <h1 className="text-center text-clamp my-12">Sortable</h1>
        <div className="px-5">
          <ReactSortable list={blocks} setList={setBlocks} {...sortableOptions}>
            {blocks.map((block, blockIndex) => (
              <BlockWrapper
                key={block.id}
                block={block}
                blockIndex={[blockIndex]}
                setBlocks={setBlocks}
              />
            ))}
          </ReactSortable>
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default SortablePage;
