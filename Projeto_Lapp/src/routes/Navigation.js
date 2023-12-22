import { createStackNavigator } from '@react-navigation/stack';

import PagCadastro from '../pages/PagCadastro';
import Paglogin from '../pages/PagLogin';
import PagTemp from '../pages/PagTemp';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="PagLogin"
                component={Paglogin}
                options={{
                    title: 'Tela Login',
                    headerStyle: { backgroundColor: 'black' },
                    headerTintColor: '#fff',
                    headerShown: false
                }}


            />

            <Stack.Screen
                name="PagCadastro"
                component={PagCadastro}
                options={{
                    title: 'Tela cadastro',
                    headerStyle: { backgroundColor: 'black' },
                    headerTintColor: '#fff',
                    headerShown: false
                }}


            />

            <Stack.Screen
                name="PagTemp"
                component={PagTemp}
                options={{
                    title: 'Tela do clima',
                    headerStyle: { backgroundColor: 'black' },
                    headerTintColor: '#fff',
                    headerShown: false
                }}

            />




        </Stack.Navigator>
    )
}
