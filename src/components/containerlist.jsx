import Button from './Button'
function containerlist({itemname}) {
    return (
        <li className="flex justify-between border-b-2 p-2">
            <div>
              {itemname}  
            </div>
           

           <Button>
            view
            </Button> 
        </li>
    )
}

export default containerlist
