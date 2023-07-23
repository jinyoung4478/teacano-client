import { Responsive, WidthProvider, Layout } from "react-grid-layout";
import { Header, Main, Footer } from "@/components/common";

const ResponsiveGridLayout = WidthProvider(Responsive);

const INIT_LAYOUT = [
  { i: "Grid Item 1", x: 0, y: 0, w: 1, h: 1 },
  { i: "Grid Item 2", x: 1, y: 0, w: 1, h: 1 },
  { i: "Grid Item 3", x: 2, y: 0, w: 1, h: 1 },
  { i: "Grid Item 4", x: 3, y: 0, w: 1, h: 1 },
  { i: "Grid Item 5", x: 4, y: 0, w: 1, h: 1 },
];

const Grid = () => {
  const getLayouts = () => {
    const savedLayouts = localStorage.getItem("grid-layout");
    return savedLayouts ? JSON.parse(savedLayouts) : { lg: INIT_LAYOUT };
  };

  const handleLayoutChange = (layouts: Layout[]) => {
    localStorage.setItem("grid-layout", JSON.stringify({ lg: layouts }));
  };

  return (
    <>
      <Header />
      <Main>
        <h1 className="text-center text-clamp my-12">Grid</h1>
        <div className="p-8">
          <ResponsiveGridLayout
            layouts={getLayouts()}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
            rowHeight={200}
            width={1000}
            isResizable={true}
            onLayoutChange={handleLayoutChange}
          >
            {INIT_LAYOUT.map((item) => (
              <div key={item.i} className="bg-[#f5f5f5]">
                <div className="p-2">{item.i}</div>
              </div>
            ))}
          </ResponsiveGridLayout>
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default Grid;
