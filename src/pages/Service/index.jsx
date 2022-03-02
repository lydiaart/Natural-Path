import Work from "../../components/Work";
import serviceData from "../../utils/service.json";

function Service() {
  return (
    <>
      {/* <!--project start--> */}
      {/* column */}
      <section id="project" className="project">
        <article>
          {/* row */}
          <div className="container project-details project-header text-left">
            <h2>Our Offerings</h2>
            <p>
              Let's begin your <i>Natural Path</i> journey
            </p>
          </div>
        </article>
      </section>
      <section>
        <article>
          <div class="container">
            <div class="row justify-content-around">
              <div class="col">One of three columns</div>
              <div class="col">One of three columns</div>
              <div class="col">One of three columns</div>
            </div>
          </div>
        </article>
        <article>
          <div class="container">
            <div class="row justify-content-around">
              <div class="col">One of three columns</div>
              <div class="col">One of three columns</div>
              <div class="col">One of three columns</div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Service;
