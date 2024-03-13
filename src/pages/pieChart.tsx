import AdminSidebar from "../components/AdminSidebar";
import { DoughnutChart, PieChart } from "../components/Charts";
import { categories } from "../assets/data.json";
const pieChart = () => {
  return (
    <div className="adminContainer">
      {/* Sidebar */}
      <AdminSidebar />
      {/* main */}
      <main className="chartContainer">
        <h1>Pie & Doughnut Charts</h1>
        <section>
          <div>
            <PieChart
              labels={["Processing", "Shipped", "Delivered"]}
              data={[12, 9, 13]}
              backgroundColor={[
                `hsl(110,80%,80%)`,
                `hsl(110,80%,50%)`,
                `hsl(110,40%,50%)`,
              ]}
              offset={[10, 10, 50]}
            />
          </div>
          <h2>Order Fullfillment Ratio</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={categories.map((i) => i.heading)}
              data={categories.map((i) => i.value)}
              backgroundColor={categories.map(
                (i) => `hsl(${i.value * 4},${i.value}%,40%)`
              )}
              offset={[10, 10, 10, 80]}
              legends={false}
            />
          </div>
          <h2>Products Category Ratio</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={["In Stock", "Out of Stock"]}
              data={[40, 20]}
              backgroundColor={[`hsl(269,80%,40%)`, `rgb(53 162 255)`]}
              offset={[10, 50]}
              legends={false}
              cutout={"70%"}
            />
          </div>
          <h2>Stock Availability</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              data={[32, 18, 5, 20, 25]}
              backgroundColor={[
                `hsl(110,80%,40%)`,
                `hsl(19,80%,40%)`,
                `hsl(69,80%,40%)`,
                `hsl(300,80%,40%)`,
                `rgb(53,162,255)`,
              ]}
              offset={[20, 30, 20, 30, 80]}
              legends={false}
            />
          </div>
          <h2>Revenue Distribution</h2>
        </section>
        <section>
          <div>
            <PieChart
              labels={["Teenager(Below 20)", "Adult(20-40)", "Older(above 40)"]}
              data={[30, 250, 70]}
              backgroundColor={[
                `hsl(10,${80}%,80%)`,
                `hsl(10,${80}%,50%)`,
                `hsl(10,${40}%,50%)`,
              ]}
              offset={[10, 10, 50]}
            />
          </div>
          <h2>Users Age Group</h2>
        </section>
        <section>
          <div>
            <DoughnutChart
              labels={["Admin", "Customers"]}
              data={[40, 250]}
              backgroundColor={[`hsl(335,100%,40%)`, `hsl(44, 98%,50%)`]}
              offset={[0, 80]}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default pieChart;
