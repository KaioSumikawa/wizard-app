import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Botao from '../components/Botao';

export default function TelaInicial() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../assets/images/capa.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Overlay escuro para dar contraste e destacar as informações */}
      <View style={styles.overlay}>
        <View style={styles.conteudo}>
          <Text style={styles.titulo}>WizardApp</Text>
          <Text style={styles.subtitulo}>Catálogo Mágico de Filmes</Text>
          <Text style={styles.descricao}>
            Explore toda a saga de Harry Potter, gerencie seus favoritos e reviva a magia do cinema.
          </Text>

          <Botao
            titulo="Acessar Catálogo"
            onPress={() => router.push('/catalogo')}
            style={styles.botaoPrincipal}
          />

          <Botao
            titulo="Sobre o App"
            onPress={() => router.push('/sobre')}
            style={styles.botaoSecundario}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(10, 10, 15, 0.75)', // Fundo mais profundo e cinematográfico
    justifyContent: 'flex-end',
    paddingHorizontal: 28,
    paddingBottom: 48,
  },
  conteudo: {
    alignItems: 'center',
    width: '100%',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFD700', // Dourado mais vivo e brilhante
    letterSpacing: 2,
    marginBottom: 4,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.95)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  subtitulo: {
    fontSize: 15,
    color: '#E0E0E0',
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  descricao: {
    fontSize: 13.5,
    color: '#B8B8B8',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 20,
    paddingHorizontal: 8,
  },
  botaoPrincipal: {
    width: '100%',
    backgroundColor: '#8B0000', // Vermelho Grifinória mais profundo
    marginBottom: 14,
    borderWidth: 1.5,
    borderColor: '#FFD700', // Borda dourada marcante
  },
  botaoSecundario: {
    width: '100%',
    backgroundColor: 'rgba(20, 20, 30, 0.9)', // Efeito vidro fumê escuro
    borderWidth: 1,
    borderColor: 'rgba(255, 215, 0, 0.5)', // Dourado sutil nas bordas
  },
});