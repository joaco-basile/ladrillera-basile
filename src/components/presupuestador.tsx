import { Button } from "@nextui-org/button";
import { CalcDistancia } from "../utils/presupuesto";

export default function Presupuestador() {
  return (
    <Button onClick={() => {
      CalcDistancia('-68.82110895260726,-32.91458271076224')
    }}
      color="primary"
    />
  )
}