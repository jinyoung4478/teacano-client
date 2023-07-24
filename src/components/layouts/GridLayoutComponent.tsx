import { Responsive, WidthProvider, Layout, Layouts } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

interface GridLayoutProps {
  layouts: Layouts;
  children?: React.ReactNode;
}

const GridLayoutComponent = ({ layouts }: GridLayoutProps) => {
  const handleLayoutChange = (layouts: Layout[]) => {
    localStorage.setItem("grid-layout", JSON.stringify({ lg: layouts }));
  };

  return (
    <ResponsiveGridLayout
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
      rowHeight={200}
      width={1000}
      isResizable={true}
      onLayoutChange={handleLayoutChange}
    >
      {layouts["lg"].map((item) => (
        <div key={item.i} className="bg-[#f5f5f5]">
          <div className="p-2">{item.i}</div>
        </div>
      ))}
    </ResponsiveGridLayout>
  );
};

export default GridLayoutComponent;
