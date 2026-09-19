import './App.css'
import Header from './components/Header'
import StatCard  from './components/StatCard'
import GoalCard from './components/GoalCard'
import Card from './components/Card'
import Alert from './components/Alert'
import Modal from './components/Modal'

function App() {

  return (
    <div>

      <Header title="React learning journey" name="Marshad Ahamed"/>

      <Card title="Learning progress">
        <StatCard title="Day" value={1} isCompleted={true}/>
        <StatCard title="Day" value={2}/>
        <StatCard title="Hours" value={2}/>
        <StatCard title="Target" value="October 20"/>
      </Card>

      <GoalCard goal="Understand React components and props." learned="props and components"/>

      <Card title="Front-End">
        <p>React</p>
        <p>Today i'm learning component composition.</p>
      </Card>

      <Card title="Back-End">
        <p>Spring Boot</p>
        <p>Building backend APIs</p>
      </Card>

      <Card title="React">
        <p>Front end framework</p>
        <p>21 days</p>
        <button>Click Me</button>
      </Card>

      <Alert type="Warning">
        <p>Alert message : Please everyone stay in a safe place until next announcement</p>
        <img src="icon.png" alt="Warning"/>
        <button>Action</button>
      </Alert>

      <Alert>
        <GoalCard goal="Finish React day 3" learned="Composition"/>
      </Alert>

      <Modal title="Delete account" showWarning={true}>
        <p>Are you sure you want to delete your account??</p>
        <button>Cancel</button>
        <button>Confirm</button>
      </Modal>
    </div>
  )
}

export default App