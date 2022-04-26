import './App.css';


const Home = () => {
    return (
        <div className="w-full h-full bg">
            <div className="flex flex-row">
                <div className="w-96 bg-blue-300">
                    <h1>this is menu</h1>
                </div>
                <div className="w-96 bg-red-300">
                    <h1>this is main content</h1>
                </div>
            </div>
            <footer className="w-full bg-gray-300">
                <h1>This is footer</h1>
            </footer>
        </div>
    )
}


export default Home