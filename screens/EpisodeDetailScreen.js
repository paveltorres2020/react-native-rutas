import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function EpisodeDetailScreen({ route }) {
  const { episodeUrl } = route.params;
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(episodeUrl)
      .then(res => res.json())
      .then(data => {
        setEpisode(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al obtener episodio:', err);
        setLoading(false);
      });
  }, [episodeUrl]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#00ff00" />
        <Text>Cargando episodio...</Text>
      </View>
    );
  }

  if (!episode) {
    return (
      <View style={styles.loader}>
        <Text>Error al cargar episodio.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{episode.name}</Text>
      <Text>Episodio: {episode.episode}</Text>
      <Text>Fecha de emisión: {episode.air_date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  }
});
