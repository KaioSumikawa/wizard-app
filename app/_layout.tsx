import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#16161D' }, // Mesma cor temática mística nos headers
        headerTintColor: '#D4AF37', // Dourado mágico combinando com o tema
        headerTitleStyle: { fontWeight: 'bold' },
        headerShadowVisible: false, // Remove a linha feia abaixo do header
        contentStyle: { backgroundColor: '#16161D' }, // Fundo padrão unificado para todas as telas
      }}
    >
      {/* Oculta o header apenas na tela inicial para a imagem de fundo preencher tudo */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="catalogo" options={{ title: 'Catálogo de Filmes' }} />
      <Stack.Screen name="detalhes" options={{ title: 'Detalhes do Filme' }} />
      <Stack.Screen name="sobre" options={{ title: 'Sobre o App' }} />
    </Stack>
  );
}