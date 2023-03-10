import LayoutSidebar from './LayoutSidebar'
import './App.css'
import Sidebar from './Sidebar/Sidebar'
import Editor from './Editor/Editor'
import Extra from './Extra'

function App() {
	return (
		<div className="App">
			<LayoutSidebar>
				<Sidebar />
				<Editor />
				<Extra />
			</LayoutSidebar>
		</div>
	)
}

export default App
