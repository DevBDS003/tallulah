import PageContainer from "./layout/PageContainer";
import FlippableCard from "./components/FlippableCard";
import back from "./assets/backs/default.png";
import louco from "./assets/major/00-TheFool.png";

function App() {
    return (
        <PageContainer>
            <FlippableCard card={louco} cardName={"O Louco"} back={back} />
        </PageContainer>
    );
}

export default App;
