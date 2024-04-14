<script>
  document.addEventListener("DOMContentLoaded", function() {
    let sidebar = document.querySelector(".sidebar");
    let toggleBtn = document.getElementById("btn");

    // Toggle sidebar function
    toggleBtn.addEventListener("click", function() {
      sidebar.classList.toggle("open");
      toggleBtn.classList.toggle("bx-menu");
      toggleBtn.classList.toggle("bx-menu-alt-right");
    });

    // Simulated leave request approval
    let leaveRequests = document.querySelectorAll(".leave-requests tbody tr");

    leaveRequests.forEach(function(request) {
      let status = request.querySelector(".status");
      let approveBtn = request.querySelector(".approve-btn");
      let rejectBtn = request.querySelector(".reject-btn");

      approveBtn.addEventListener("click", function() {
        status.textContent = "Approved";
        status.classList.remove("pending");
        status.classList.add("approved");
      });

      rejectBtn.addEventListener("click", function() {
        status.textContent = "Rejected";
        status.classList.remove("pending");
        status.classList.add("rejected");
      });
    });
  });
</script>