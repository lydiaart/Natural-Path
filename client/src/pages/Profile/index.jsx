import Auth from "../../utils/auth";

function Profile() {
    console.log(Auth.getProfile())
    return (
        <>

            <div class="container emp-profile">
                <form method="get" action="/editprofile">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="profile-img">
                                <img src="/assets/images/background/profile.jpg" alt="profile" />
                                <div class="file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file" />
                                </div>
                                <div class="col-md-12">

                                    <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile" />

                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="profile-head">
                                <h3>
                                    {Auth.getProfile().data.firstName + " " + Auth.getProfile().data.lastName}
                                </h3>
                                <br />
                                <div class="tab-content home-tab" id="myTabContent">
                                    <div class=" " id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{Auth.getProfile().data.firstName + " " + Auth.getProfile().data.lastName}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{Auth.getProfile().data.email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{Auth.getProfile().data.phone}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Appointments</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="order-tab" data-toggle="tab" href="#order" role="tab" aria-controls="profile" aria-selected="false">Order History</a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                        <div class="col-md-4">
                        </div>
                        <div class="col-md-8">
                            <div class="tab-content home-tab" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Kshiti123</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Kshiti Ghelani</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>kshitighelani@gmail.com</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>123 456 7890</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Web Developer and Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                        </div>
                        <div class="col-md-8">
                            <div class="tab-content profile-tab" id="myTabContent">
                                <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                        </div>
                        <div class="col-md-8">
                            <div class="tab-content order-tab" id="myTabContent">
                                <div class="tab-pane fade show active" id="order" role="tabpanel" aria-labelledby="order-tab">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                    </div>
                </form>
            </div>
        </>
    )
}

export default Profile;