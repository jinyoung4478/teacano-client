import { useState } from "react";
import { Responsive, WidthProvider, Layout } from "react-grid-layout";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { Header, Main, Footer } from "@/components/common";

const ResponsiveGridLayout = WidthProvider(Responsive);

const INIT_LAYOUT = [
  { i: "Grid Item 1", x: 0, y: 0, w: 4, h: 4 },
  { i: "Grid Item 2", x: 4, y: 0, w: 4, h: 2 },
  { i: "Grid Item 3", x: 8, y: 0, w: 2, h: 2 },
  { i: "Grid Item 4", x: 4, y: 2, w: 6, h: 2 },
];

const Dashboard = () => {
  const handleLayoutChange = (layouts: Layout[]) => {
    console.log(layouts);
  };

  const onDragEnd = (info: DropResult) => {
    console.log("Drag", info);
  };

  return (
    <>
      <Header />
      <Main>
        <h1 className="text-center text-clamp my-12">Dashboard</h1>
        <div className="p-8">
          <ResponsiveGridLayout
            layouts={{ lg: INIT_LAYOUT }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 10, md: 8, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={100}
            width={1000}
            isResizable={true}
            onLayoutChange={handleLayoutChange}
            draggableHandle=".handle"
          >
            {INIT_LAYOUT.map((item) => (
              <div key={item.i} className="bg-[#f5f5f5]">
                <p className="flex gap-2 p-4">
                  <Bars3Icon width={16} className="handle cursor-move" />
                  {item.i}
                </p>
              </div>
            ))}
          </ResponsiveGridLayout>
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default Dashboard;
