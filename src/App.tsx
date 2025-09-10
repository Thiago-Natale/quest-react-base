import './App.css'
import { ShowLabelNameButton } from './components/ShowLabelNameButton'
import { UppercaseColorfulText } from './components/UppercaseColorfulText'

function App() {

  return (
    <>
      <UppercaseColorfulText text='ruan' color='red'></UppercaseColorfulText>
      <ShowLabelNameButton labelName='Baixar CV'></ShowLabelNameButton>
    </>
  )
}

export default App
