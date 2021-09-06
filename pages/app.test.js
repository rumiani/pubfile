import MyApp from './_app'
test('renders without error',()=>{
const div = document.createElement('div');
ReactDOM.render(<MyApp/>,div);
ReactDOM.unmountComponentAtNode(div)
});