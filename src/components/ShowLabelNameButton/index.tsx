type ShowLabelNameButtonProps = {
  labelName: string;
}

export const ShowLabelNameButton = ({labelName}:ShowLabelNameButtonProps)=>{
    return (
        <button onClick={()=>alert(`A label desse botão é: ${labelName}`)}>{labelName}</button>
    )
}