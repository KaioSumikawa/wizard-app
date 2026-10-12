import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#16161D' }, 
        headerTintColor: '#D4AF37', 
        headerTitleStyle: { fontWeight: 'bold' },
        headerShadowVisible: false, 
        contentStyle: { backgroundColor: '#16161D' }, 
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="catalogo" options={{ title: 'Catálogo de Filmes' }} />
      <Stack.Screen name="detalhes" options={{ title: 'Detalhes do Filme' }} />
      <Stack.Screen name="sobre" options={{ title: 'Sobre o App' }} />
    </Stack>
  );
}