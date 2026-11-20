
import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);

    // Array com as frases motivacionais
    this.frases = [
      {
        texto: 'Acredite em você e tudo será possível.',
        autor: 'Desconhecido',
        imagem: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800'
      },
      {
        texto: 'Nunca desista dos seus sonhos.',
        autor: 'Desconhecido',
        imagem: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800'
      },
      {
        texto: 'Cada dia é uma nova oportunidade.',
        autor: 'Desconhecido',
        imagem: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800'
      },
      {
        texto: 'O sucesso começa com a decisão de tentar.',
        autor: 'Desconhecido',
        imagem: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800'
      },
      {
        texto: 'Seja forte, pois grandes coisas levam tempo.',
        autor: 'Desconhecido',
        imagem: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800'
      },
      {
        texto: 'Transforme seus obstáculos em oportunidades.',
        autor: 'Desconhecido',
        imagem: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800'
      },
      {
        texto: 'O futuro depende do que você faz hoje.',
        autor: 'Desconhecido',
        imagem: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800'
      }
    ];

    // Estado inicial do aplicativo
    this.state = {
      frase: this.frases[0],
    };
  }

  // Função para sortear uma nova frase
  sortearFrase = () => {

    const indice = Math.floor(
      Math.random() * this.frases.length
    );

    // Atualiza a frase e a imagem na tela
    this.setState({
      frase: this.frases[indice]
    });

  };

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.titulo}>
          INSPIRA+
        </Text>

        <Text style={styles.subtitulo}>
          Sua dose diária de motivação
        </Text>

        {/* Imagem da frase */}
        <Image
          source={{ uri: this.state.frase.imagem }}
          style={styles.imagem}
        />

        {/* Frase sorteada */}
        <View style={styles.card}>

          <Text style={styles.frase}>
            "{this.state.frase.texto}"
          </Text>

          <Text style={styles.autor}>
            — {this.state.frase.autor}
          </Text>

        </View>

        {/* Botão para gerar outra frase */}
        <TouchableOpacity
          style={styles.botao}
          onPress={this.sortearFrase}
        >
          <Text style={styles.textoBotao}>
            ✨ Nova inspiração
          </Text>
        </TouchableOpacity>

        <Text style={styles.rodape}>
          Acredite no seu potencial!
        </Text>

      </View>
    );
  }
}

// Estilização do aplicativo
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#101426',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#A78BFA',
    marginBottom: 5
  },

  subtitulo: {
    fontSize: 15,
    color: '#FFFFFF',
    marginBottom: 25
  },

  imagem: {
    width: '100%',
    height: 220,
    borderRadius: 20,
    marginBottom: 20
  },

  card: {
    backgroundColor: '#202943',
    width: '100%',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 25
  },

  frase: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },

  autor: {
    color: '#A78BFA',
    fontSize: 15
  },

  botao: {
    backgroundColor: '#8B5CF6',
    padding: 18,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center'
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  },

  rodape: {
    color: '#AAAAAA',
    marginTop: 25,
    fontSize: 13
  }

});
