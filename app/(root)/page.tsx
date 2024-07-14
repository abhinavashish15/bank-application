import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Abhinav", lastName:"Ashish", email:"abhinavashish1503@gmail.com"};
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstname || "Guest"}
              subtext="Access and Manage your Account"
            />

            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={10000.69}
            />
          </header>

          RECENT TRANSACTIONS
        </div>

        <RightSidebar 
          user={loggedIn}
          transactions={[]}
          banks={[{currentBalance: 1250.69}, {currentBalance:10000.88}]}
        />
      </section>
    </div>
  );
};

export default Home;
