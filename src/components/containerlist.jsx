import Buttons from './Button'
function containerlist({itemname}) {
    return (
        <li className="flex justify-between border-b-2 p-2">
            <div>
              {itemname}  
            </div>
           

           <Buttons>
            view
            </Buttons> 
        </li>
    )
}

export default containerlist
