import Work from "../../components/Work";
import serviceData from "../../utils/service.json";

function Service() {
  return (
    <>
      {/* <!--project start--> */}
      <section id="project" className="project">
        <div className="container">
          <div className="project-details">
            <div className="project-header text-left">
              <h2>Our Offerings</h2>
              <p>
                Let's begin your <i>Natural Path</i> journey
              </p>
            </div>
          </div>
          {/* one row with three boxes */}
          {/* <!--/.row--> */}
          <div class="container"></div>
          <div class="project-details">
            <p>Provider 1</p>
          </div>
            <div class="column"></div>
            <div class="column"></div>
          {/* one row with a select feature */}
        </div>
      </section>
    </>
  );
}

export default Service;
