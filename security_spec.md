# Security Specification for Satkhira Rural Clinic

## Data Invariants
1. Appointments:
   - Patients can create new appointments with validation (name, valid phone, age, gender, problem, date, status == 'pending').
   - Only admin (anaruldr4@gmail.com) can update status (confirmed, done, cancelled) or delete appointments.
   - Public users can create appointments, but cannot list all appointments (prevents patient PII phone/name scraping).
   - Authenticated admin can read/list all appointments.
2. Testimonials:
   - Public users can read approved testimonials (`status == 'approved'`).
   - Public users can submit a testimonial with status forced to `'pending'`.
   - Admin can approve, edit, or delete any testimonial.
3. Blog Posts:
   - Public users can read blog posts.
   - Only admin can create, update, or delete blog posts.
4. Admins:
   - User `anaruldr4@gmail.com` is bootstrapped admin.
