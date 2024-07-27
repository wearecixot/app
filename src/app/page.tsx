import ActivityList from "@/components/ActivityList";
import Layout from "@/components/Layout";
import Salutation from "@/components/Salutation";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <Layout className="flex flex-col gap-6">
      <Salutation />
      <Stats />
      <ActivityList />
    </Layout>
  );
};

export default Home;

