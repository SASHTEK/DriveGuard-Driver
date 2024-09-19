import TabNavigation from "../../components/navbar/TabNavigation";
import Card from "../../components/objects/Card/Card";
import CounterBox from "../../components/objects/CounterBox/CounterBox";

const New = () => {
    return ( 
        <div className="container">
            <Card subject={"Test"} message={"This is a test work"} subbgcolor={"red"} subtextcolor={"white"} msgbgcolor={"white"} msgtextcolor={"red"}/>
            <CounterBox text={"test"} number={5}/>
            <TabNavigation bgnew={"rgb(10, 55, 202)"}/>
        </div>
     );
}
 
export default New;