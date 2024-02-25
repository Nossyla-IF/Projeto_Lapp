import { createStackNavigator } from '@react-navigation/stack';

import PagCadastro from '../pages/PagCadastro';
import Paglogin from '../pages/PagLogin';
import PagPrincipal from '../pages/PagPrincipal';
import PagTemp from '../pages/PagTemp';
import Redefinir_Senha from '../pages/Redefinir_Senha';


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
                name="PagPrincipal"
                component={PagPrincipal}
                options={{
                    title: 'Tela Principal',
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


            <Stack.Screen
                name="Redefinir_Senha"
                component={Redefinir_Senha}
                options={{
                    title: 'Tela da Nova Senha',
                    headerStyle: { backgroundColor: 'black' },
                    headerTintColor: '#fff',
                    headerShown: false
                }}

            />





        </Stack.Navigator>
    )
}
