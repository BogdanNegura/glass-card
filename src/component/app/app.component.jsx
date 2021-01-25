import React from "react"
import "./app.style.css"
import  avatar  from "../../_assets/avatar.png";
import  twich  from "../../_assets/twitch.png";
import  steam  from "../../_assets/steam.png";
import  upcoming  from "../../_assets/upcoming.png";
import  library  from "../../_assets/library.png";
import  controller  from "../../_assets/controller.png";
import  assasins  from "../../_assets/assassins.png";
import  sackboy  from "../../_assets/sackboy.png";
import  spiderman  from "../../_assets/spiderman.png";


const App = () => {
    return (
        <div className="app">
            <main>
                <section className="glass">
                    <div className="dashboard">
                        <div className="user">
                            <img src={avatar} alt=""/>
                            <h3>Bogdan Negura</h3>
                            <p>Pro Member</p>
                        </div>
                        <div className="links">
                            <div className="link">
                                <img src={twich} alt=""/>
                                <h2>Streams</h2>
                            </div>
                            <div className="link">
                                <img src={steam} alt=""/>
                                <h2>Streams</h2>
                            </div>
                            <div className="link">
                                <img src={upcoming} alt=""/>
                                <h2>Streams</h2>
                            </div>
                            <div className="link">
                                <img src={library} alt=""/>
                                <h2>Streams</h2>
                            </div>
                        </div>
                        <div className="pro">
                            <h2>Join pro for free games.</h2>
                            <img src={controller} alt=""/>
                        </div>
                    </div>
                    <div className="games">
                        <div className="status">
                            <h1>Active Games</h1>
                            <input type="text"/>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <img src={assasins} alt=""/>
                                <div className="card-info">
                                    <h2>Assasins Creed Valhalla</h2>
                                    <p>PS5 Version</p>
                                    <div className="progress"></div>
                                </div>
                                <h2 className="percentage">60%</h2>
                            </div>
                            <div className="card">
                                <img src={sackboy} alt=""/>
                                <div className="card-info">
                                    <h2>Assasins Creed Valhalla</h2>
                                    <p>PS5 Version</p>
                                    <div className="progress"></div>
                                </div>
                                <h2 className="percentage">60%</h2>
                            </div>
                            <div className="card">
                                <img src={spiderman} alt=""/>
                                <div className="card-info">
                                    <h2>Assasins Creed Valhalla</h2>
                                    <p>PS5 Version</p>
                                    <div className="progress"></div>
                                </div>
                                <h2 className="percentage">60%</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <div className="circle1"></div>
            <div className="circle2"></div>
        </div>
    )
}

export { App }