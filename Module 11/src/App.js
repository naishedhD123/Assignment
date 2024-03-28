import './App.css'
import React from 'react'
import styled from 'styled-components'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Carousel from 'react-bootstrap/Carousel';
import Product from './Product';

const App = () => {



  const Header = styled.header`
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-top:1px solid rgb(180, 180, 180);
    border-bottom:1px solid rgb(180, 180, 180);
    padding:20px 0;

  `
  const Logo = styled.div`
    color:green;
    font-size:30px;
    font-weight:600;
  `

  const InpSec = styled.section`
    display:flex;

    input{
      width:500px;
      height:45px;
      border: 1px solid;
      border-right:none;
      outline:none;
      padding-left:10px;
      font-size:15px;
    }

    span{
      font-size:20px;
      border:1px solid;
      padding:6px 10px;
      border-left:none
    }
  `

  const Sec2 = styled.section`
    display:flex;

    select{
      height:25px;
      width:70px;
    }

    div i{
      margin-left:20px;
      font-size:20px;
    }

  `
  const Nav = styled.section`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px 0;
    border-bottom:1px solid rgb(180, 180, 180);

    button{
      background:green;
      height:40px;
      width:250px;
      border:none;
      color:white;
      font-size:15px;
      margin-left:10px;
      letter-spacing:1px;
      border-radius:4px;
    }
    a{
      margin-right:40px;
      font-weight:500;
    }
    .num{
      font-size:18px;
      font-weight:500;
      span{
      color:green;
      }
    }
  `

  const CarouselSec = styled.section`
    margin-top:20px;
    height:600px;

    img{
      border-radius:20px;
    }
  `
  const Fdiv = styled.div`
    display:flex;
    justify-content:space-between;
    padding:20px 0;

    button{
      padding:8px 16px;
      border-radius:50%;
      margin-left:20px;
      border:none;
    }
  `

  const Items = styled.div`
    display:flex;
    gap:20px;
    padding-bottom:30px;
  `


  return (
    <div>
      <Header>
        <Logo>
          Nest
        </Logo>
        <InpSec>
          <input type='text' placeholder='Search'></input>
          <span><i class="fa-solid fa-magnifying-glass"></i></span>
        </InpSec>
        <Sec2>
          <select>
            <option>abc</option>
            <option>def</option>
            <option>ghi</option>
          </select>
          <div>
            <i class="fa-regular fa-heart"></i> Compare
            <i class="fa-solid fa-cart-shopping"></i> Cart
            <i class="fa-regular fa-user"></i> Account
          </div>
        </Sec2>
      </Header>
      <Nav>
        <button>All Categories</button>
        <div className='links'>
          <a>Home</a>
          <a>About</a>
          <a>Shop</a>
          <a>Blog</a>
          <a>Pages</a>
          <a>Contact</a>
        </div>
        <div className='num'>
          <i class="fa-solid fa-headphones"></i> <span>1900-888</span>
        </div>
      </Nav>
      <section>
        <Carousel>
          <Carousel.Item>
            <CarouselSec>
              <img src='https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4' height="100%" width="100%"></img>
            </CarouselSec>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselSec>
              <img src='https://www.fruitsmith.com/pub/media/mageplaza/blog/post/o/n/one_seed_fruits.png' height="100%" width="100%"></img>
            </CarouselSec>
          </Carousel.Item>
        </Carousel>
      </section>
      <section>
        <Fdiv>
          <h5>Featured Categories</h5>
          <div>
            <button>
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <button>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </Fdiv>
        <Items>
          <Product img='https://www.madewithdelmonte.in/uploads/peach-fruit-drink.png' name='Peach' bg='lightblue'></Product>
          <Product img='https://freepngimg.com/thumb/orange/19-orange-png-image-download-thumb.png' name='Fruits' bg='lightpink'></Product>
          <Product img='https://www.balajiwafers.com/wp-content/uploads/2019/04/T_Wafers_SimplySalted_Middle-2.png' name='Chieps' bg='lightcyan'></Product>
          <Product img='https://images.creativefabrica.com/products/thumbnails/2023/10/13/SfAWVlo1R/2WhWe5lqnwyxT0Zdh4l6iuFST36.png' name='Apple' bg='lightgreen'></Product>
          <Product img='https://www.madewithdelmonte.in/uploads/peach-fruit-drink.png' name='Peach' bg='lightblue'></Product>
          <Product img='https://freepngimg.com/thumb/orange/19-orange-png-image-download-thumb.png' name='Fruits' bg='lightpink'></Product>
          <Product img='https://www.balajiwafers.com/wp-content/uploads/2019/04/T_Wafers_SimplySalted_Middle-2.png' name='Chieps' bg='lightcyan'></Product>
          <Product img='https://images.creativefabrica.com/products/thumbnails/2023/10/13/SfAWVlo1R/2WhWe5lqnwyxT0Zdh4l6iuFST36.png' name='Apple' bg='lightgreen'></Product>
          <Product img='https://www.madewithdelmonte.in/uploads/peach-fruit-drink.png' name='Peach' bg='lightblue'></Product>
          <Product img='https://freepngimg.com/thumb/orange/19-orange-png-image-download-thumb.png' name='Fruits' bg='lightpink'></Product>
        </Items>
      </section>
    </div>
  )
}

export default App
