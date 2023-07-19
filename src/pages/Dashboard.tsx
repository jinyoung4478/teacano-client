import { Responsive, WidthProvider } from "react-grid-layout";
import { Header, Main, Footer } from "@/components/layouts";

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
  { i: "Grid Item 1", x: 0, y: 0, w: 1, h: 1 },
  { i: "Grid Item 2", x: 1, y: 0, w: 1, h: 1 },
  { i: "Grid Item 3", x: 2, y: 0, w: 1, h: 1 },
  { i: "Grid Item 4", x: 3, y: 0, w: 1, h: 1 },
  { i: "Grid Item 5", x: 4, y: 0, w: 1, h: 1 },
];

const Dashboard = () => {
  return (
    <>
      <Header />
      <Main>
        <h1 className="text-center text-clamp my-12">Dashboard</h1>
        <div className="p-8 bg-red-100">
          <ResponsiveGridLayout
            layouts={{ lg: layout }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
            rowHeight={300}
            width={1000}
            isResizable={true}
          >
            {layout.map((item) => (
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

export default Dashboard;
