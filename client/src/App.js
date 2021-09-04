import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Task from "./components/Task";
import TaskModal from "./components/TaskModal";
import JobModal from "./components/JobModal";
function App() {
  useEffect(() => {
    M.AutoInit();
    M.toast({ html: "Hi, I am Michael. Welcome to Planr" });
  }, []);
  return (
    <section className="dashboard">
      <Sidebar />
      <Main>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </Main>
      <TaskModal />
      <JobModal />
    </section>
  );
}

export default App;
