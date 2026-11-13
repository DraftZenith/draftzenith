CREATE TABLE public.assessment_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name varchar(120) NOT NULL,
  email varchar(254) NOT NULL,
  country varchar(100) NOT NULL,
  author_website varchar(2048),
  book_title varchar(200),
  service_of_interest varchar(150) NOT NULL,
  project_description varchar(3000) NOT NULL,
  main_goal varchar(500) NOT NULL,
  budget_range varchar(80),
  consent boolean NOT NULL DEFAULT false CHECK (consent = true)
);
REVOKE ALL ON TABLE public.assessment_requests FROM anon, authenticated, PUBLIC;
GRANT ALL ON TABLE public.assessment_requests TO service_role;
ALTER TABLE public.assessment_requests ENABLE ROW LEVEL SECURITY;
