const url = 'http://127.0.0.1:5000/route/v1/car'
const ladrillera_cor = '-68.732916,-32.837388'

//Devuelve la distancia entre el punto fijo y el que ingrese el usuario
export async function CalcDistancia(user_cor: string) {
  const fullUrl = `${url}/${ladrillera_cor};${user_cor}`
  const res = await fetch(fullUrl)

  if (!res.ok) {
    console.log(res);
  }

  const data = await res.json()
  const distance = data.routes[0].distance / 1000
  console.log(distance);
}

export function CalCostoEnvio() {

}