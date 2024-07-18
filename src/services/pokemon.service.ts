import { ApiClient } from "../apiClient/apiClient";
import { config } from "../config";

const apiClient = ApiClient.getInstance();

export function getPokemon(name: string) {
  return apiClient.get(`${config.apiBaseUrl}/pokemon/${name}`);
}

export function getPokemonsByType(type: number) {
  return apiClient.get(`${config.apiBaseUrl}/pokemon/type/${type}/`);
}

export function getCatchedPokemons(userId: string) {
  return apiClient.get(`${config.apiBaseUrl}/caught/${userId}`);
}

export function catchPokemon(userId: string, pokemonId: string) {
  return apiClient.post(`${config.apiBaseUrl}/caught/${userId}`, {
    pokemondata: pokemonId,
  });
}
