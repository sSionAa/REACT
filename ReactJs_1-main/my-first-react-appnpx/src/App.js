import logo from './logo.svg';
import './App.css';
import Message from './components/Message';

function App() {
    return ( < div className = "App" >
        		<header className = "App-header">
        			<Message title = "Сообщение от тестера:" text = "Вы тестируете игру!" / >
			<Message title = "Сообщение от тестера2:" text = "Вы победили!" / >
        		</header> 
	</div>
    );
}

export default App;