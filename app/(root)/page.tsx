import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home =async () => {
  const loggedIn =await getLoggedInUser();
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.name || "Guest"}
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
