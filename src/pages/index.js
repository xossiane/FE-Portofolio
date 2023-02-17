
import Text from "@/components/atoms/Text";
import Counter from "@/components/atoms/Counter";
import CounterCards from "@/components/molecules/CounterCards";

export default function Home() {
  return (
    <>
    

    <CounterCards n={30} character="%" label="our counting"></CounterCards>
    <CounterCards n={73} character="+" label="agency members"></CounterCards>
    <CounterCards n={10000} label="projects complete"></CounterCards>
    </>
  )
}
