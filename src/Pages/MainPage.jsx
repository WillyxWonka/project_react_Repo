import Header from "../Components/Page-Header";
import Timer from "../Components/StopWatch";
import GTP_Timer from "../Components/GTP_Timer";


function MainPage()
{
  return(
    <>
      <Header>
      </Header>
      
      <div className="Body">
        Main Page
      </div>

      <div>
        <Timer></Timer>
        <GTP_Timer></GTP_Timer>
      </div>

    </>
  )

}
export default MainPage;