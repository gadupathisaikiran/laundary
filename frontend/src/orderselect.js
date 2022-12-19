import React from 'react'
import Table from 'react-bootstrap/Table';
import "./selectorder.css";


const Orderselect = () => {
    return (
        <div className='table-main'>

            <Table >
                <thead className='table-header'>
                    <tr>

                        <th>PRODUCT TYPE</th>
                        <th>QUANTITY</th>
                        <th>WASH TYPE</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>shirts</td>
                        <td><input type="number" style={{ width: "60px" }} placeholder="0"></input></td>
                        <div>
                        <td><img src='https://cdn-icons-png.flaticon.com/128/1075/1075355.png' className='washlogo' alt='img'></img></td>
                        <td><img src='https://cdn-icons-png.flaticon.com/128/5537/5537788.png'className='washlogo' alt='img'></img></td>
                        <td><img src='https://cdn-icons-png.flaticon.com/128/804/804272.png' className='washlogo'alt='img'></img></td>
                        <td><img src='https://cdn-icons-png.flaticon.com/128/2975/2975178.png' className='washlogo' alt='img'></img></td>
                        </div>
                    </tr>
                    <tr>

                        <td>T-shirts</td>
                        <td><input type="number" style={{ width: "60px" }} placeholder="0"></input></td>

                        <div>
                        <td><img src='https://cdn-icons-png.flaticon.com/128/1075/1075355.png' className='washlogo' alt='img'></img></td>
                        <td><img src='https://cdn-icons-png.flaticon.com/128/5537/5537788.png'className='washlogo' alt='img'></img></td>
                        <td><img src='https://cdn-icons-png.flaticon.com/128/804/804272.png' className='washlogo'alt='img'></img></td>
                        <td><img src='https://cdn-icons-png.flaticon.com/128/2975/2975178.png' className='washlogo' alt='img'></img></td>
                        </div>


                    </tr>
                    <tr>

                        <td >Trousers</td>
                        <td><input type="number" style={{ width: "60px" }} placeholder="0"></input></td>
                        <div>
                        <td><img src='https://cdn-icons-png.flaticon.com/128/1075/1075355.png' className='washlogo' alt='img'></img></td>
                        <td><img src='https://cdn-icons-png.flaticon.com/128/5537/5537788.png'className='washlogo' alt='img'></img></td>
                        <td><img src='https://cdn-icons-png.flaticon.com/128/804/804272.png' className='washlogo'alt='img'></img></td>
                        <td><img src='https://cdn-icons-png.flaticon.com/128/2975/2975178.png' className='washlogo' alt='img'></img></td>
                        </div>

                    </tr>
                    <tr>

                        <td >jeans</td>
                        <td><input type="number" style={{ width: "60px" }}></input></td>
                        <div>
                        <td><img src='https://cdn-icons-png.flaticon.com/128/1075/1075355.png' className='washlogo' alt='img'></img></td>
                        <td><img src='https://cdn-icons-png.flaticon.com/128/5537/5537788.png'className='washlogo' alt='img'></img></td>
                        <td><img src='https://cdn-icons-png.flaticon.com/128/804/804272.png' className='washlogo'alt='img'></img></td>
                        <td><img src='https://cdn-icons-png.flaticon.com/128/2975/2975178.png' className='washlogo' alt='img'></img></td>
                        </div>
                    </tr>
                    <tr>

                        <td >Boxers</td>
                        <td><input type="number" style={{ width: "60px" }} placeholder="0"></input></td>
                        <div>
                        <td><img src='https://cdn-icons-png.flaticon.com/128/1075/1075355.png' className='washlogo' alt='img'></img></td>
                        <td><img src='https://cdn-icons-png.flaticon.com/128/5537/5537788.png'className='washlogo' alt='img'></img></td>
                        <td><img src='https://cdn-icons-png.flaticon.com/128/804/804272.png' className='washlogo'alt='img'></img></td>
                        <td><img src='https://cdn-icons-png.flaticon.com/128/2975/2975178.png' className='washlogo' alt='img'></img></td>
                        </div>
                    </tr>
                    <tr>

                        <td >Joggers</td>
                        <td><input type="number" style={{ width: "60px" }} placeholder="0"></input></td>
                        <div>
                            <td><img src='https://cdn-icons-png.flaticon.com/128/1075/1075355.png' className='washlogo' alt='img'></img></td>
                            <td><img src='https://cdn-icons-png.flaticon.com/128/5537/5537788.png'className='washlogo' alt='img'></img></td>
                            <td><img src='https://cdn-icons-png.flaticon.com/128/804/804272.png' className='washlogo'alt='img'></img></td>
                            <td><img src='https://cdn-icons-png.flaticon.com/128/2975/2975178.png' className='washlogo' alt='img'></img></td>
                        </div>
                    </tr>
                </tbody>
            </Table>

            <button className='cancel'>cancel</button> 
            <button className='proceed'>proceed</button>
          
        </div>
    );




}

export default Orderselect