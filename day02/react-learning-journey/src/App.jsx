import './App.css'
import Header from './components/Header'
import StatCard  from './components/StatCard'
import GoalCard from './components/GoalCard'

function App() {

  return (
    <div>
      <Header title="React learning journey" name="Marshad Ahamed"/>
      <h2>Learning progress</h2>
      <StatCard title="Day" value={1} isCompleted={true}/>
      <StatCard title="Day" value={2}/>
      <StatCard title="Hours" value={2}/>
      <StatCard title="Target" value="October 20"/>
      <GoalCard goal="Understand React components and props." learned="props and components"/>
    </div>
  )
}

export default App