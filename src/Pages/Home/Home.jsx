import React, { useContext } from 'react'
import RecipeContext from '../../context/RecipeContext'
import './home.css'
import { Link, useParams } from 'react-router-dom'
const Home = () => {
  const { filterData, searchByCategory, isAuthenticate } = useContext(RecipeContext)
  const { id } = useParams();
  return (
    <>
      <div className="home">
        <div className="head">
          <h2>OUR RECIPES</h2>
        </div>
        <div className="box">
          <div className="icons my-2">
            <div className="all" onClick={() => searchByCategory('')}>
              <div className="img">
                <img src="/home/dish.png" alt="" />
              </div>
              <h5>ALL</h5>
            </div>
            <div className="veg" onClick={() => searchByCategory('veg')}>
              <div className="img">
                <img src="/home/vegetables.png" alt="" />
              </div>
              <h5>VEG</h5>
            </div>
            <div className="non-veg" onClick={() => searchByCategory('non_veg')}>
              <div className="img">
                <img src="/home/food.png" alt="" />
              </div>
              <h5>NON - VEG</h5>
            </div>
            <div className="non-veg" onClick={() => searchByCategory('sweet')}>
              <div className="img">
                <img src="/home/laddu.png" alt="" />
              </div>
              <h5>SWEET</h5>
            </div>
          </div>
          <div className="row">
            {filterData?.map((e) => <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12 my-3' key={e._id}>
              <div className="card" style={{ width: '18rem' }}>
                <div className="img">
                  <img src={e.img} className="card-img-top" alt="recipe-img" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{e.name}</h5>
                  <div className="card-text mt-3">
                    <p><button>P</button>{e.protein}g</p>
                    <p><button>C</button>{e.carbs}g</p>
                    <p><button>F</button>{e.fat}g</p>
                  </div>
                  {isAuthenticate && (
                    <Link to={`/recipeDetail/${e._id}`} className='btn'>Get Reciepe</Link>
                  )}
                </div>
              </div>
            </div>)}
          </div>

        </div>

      </div>
    </>
  )
}

export default Home