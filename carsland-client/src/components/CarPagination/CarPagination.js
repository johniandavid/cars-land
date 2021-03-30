import { Pagination, PaginationItem, PaginationLink} from "reactstrap";
import {useEffect, useState} from "react";

import "./CarPagination.css"

function CarPagination(props){
    const [ active, setActive ] = useState(false)
    const [ pageNums, setPageNums] = useState([])
    const [ paginationLimit, setPaginationLimit ] = useState(3)

    useEffect(() => {
        let nums = []
        for(let i = 0; i < props.pageNums; i++){
            nums.push(i+1)
        }
        setPageNums(nums)
    },[])

    function handleClick(num,e) {
        props.handlePage(num - 1)
        e.preventDefault()
    }

    let page = pageNums.map((num) => {
         return (
                    <PaginationItem>
                         <PaginationLink href="#" onClick={e => handleClick(num,e)}>
                            {num}
                        </PaginationLink>
                    </PaginationItem>
                )
    })

    return (
            <>
              <nav aria-label="Page navigation example">
                <Pagination>
                    {page}
                </Pagination>
              </nav>
            </>
      );
}

export default CarPagination;