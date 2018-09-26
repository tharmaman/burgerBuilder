import React from 'react';
import Layout from './hocs/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <Layout>
//                     Test
//                 </Layout>
//             </div>
//         );
//     }
// }

const App = () => (
    <div>
        <Layout>
            <BurgerBuilder />
        </Layout>
    </div>
);


export default App;
