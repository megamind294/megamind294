# University GitHub Portfolio Design

## Goal
Transform the user's university coursework into a professional GitHub portfolio consisting of eleven substantial repositories, preserving genuine coursework where source material exists and reconstructing missing implementations faithfully from the original assignment/report when needed.

## Portfolio Structure

1. `private-web-security-rag-assistant`
   - Python, Flask, OWASP knowledge base, TF-IDF retrieval, cosine similarity, citations, JSON API, optional OpenAI/Ollama integration, extractive fallback, tests, polished README.
   - Reconstruct from the saved university report and any recoverable source files.

2. `python-design-patterns`
   - Factory, Adapter, Observer, Builder, Iterator, and Strategy patterns.
   - One folder per pattern with runnable examples and tests.

3. `cloud-security-labs`
   - AWS VPC/EC2, Docker, DVWA, OWASP Juice Shop, HTTP, SQL injection, XSS, broken authentication, access control, and session-hijacking coursework.
   - Documented explicitly as academic labs, not production systems.

4. `mern-contact-management-system`
   - React frontend, Node.js/Express API, MongoDB/Mongoose persistence, REST CRUD operations, validation, and setup documentation.

5. `flask-task-manager`
   - Flask, SQLAlchemy, CRUD task management, validation, tests, and clean project structure.

6. `numerical-methods-python`
   - Bisection, Newton-Raphson, and Secant methods with examples, convergence reporting, tests, and simple plots where useful.

7. `data-engineering-university-labs`
   - SQL/database modelling, fact/dimension concepts, star schema, Microsoft Fabric Lakehouse ingestion, and related lab documentation/sample queries.

8. `business-intelligence-dashboard`
   - BI/dashboard coursework, KPI definitions, star-schema documentation, sample data where allowed, report screenshots/assets when recoverable, and written explanation of measures and filters.

9. `nextjs-data-visualization-dashboard`
   - Next.js, TypeScript, React Query, Tailwind CSS, validation, ingestion/data-display flows, and documented server/client responsibilities.

10. `fastapi-data-aggregation-api`
    - FastAPI, typed schemas, aggregation endpoints, validation, and automated tests.

11. `digital-transformation-coursework`
    - Literature review, Task 2, UML/model diagrams, and related written academic artifacts, grouped as coursework rather than separate software repositories.

## Source Fidelity Rules

- Prefer original university files and code whenever recoverable.
- If code is missing but the assignment/report survives, rebuild a clean working implementation that matches the original task.
- Reconstructed repositories must state in the README that the current version was reconstructed and polished from university coursework.
- Do not fabricate submission dates, grades, team members, technologies, results, screenshots, or university requirements.
- Do not publish secrets, API keys, private credentials, personal IDs, or other sensitive academic/account information.
- `.env` files remain excluded through `.gitignore`; provide `.env.example` only where configuration is needed.

## Repository Quality Standard

Every coding repository should include, where applicable:

- `README.md` with project purpose, university-coursework context, features, architecture, tech stack, setup, usage, testing, and reconstruction disclosure when relevant.
- Clear folder structure with focused modules.
- `.gitignore`.
- Dependency manifest (`requirements.txt`, `pyproject.toml`, or `package.json` as appropriate).
- Automated tests for core logic.
- Example/sample data that is safe to publish.
- Screenshots or diagrams only when genuine assets are available or clearly identified as newly created documentation visuals.
- Sensible commit history as the reconstructed/polished version is built.

## Portfolio Presentation

After the repositories are populated, update `megamind294/megamind294` profile README to highlight the strongest five or six projects first, with emphasis on:

1. Private Web Security RAG Assistant
2. MERN Contact Management System
3. Next.js Data Visualization Dashboard
4. FastAPI Data Aggregation API
5. Cloud & Security Labs
6. Python Design Patterns or Data Engineering Labs depending on final quality

The profile README should position the account toward software engineering, React/full-stack development, AI/RAG, cloud, and backend skills without overstating experience.

## Implementation Order

Work one repository at a time so each repository reaches a usable, reviewable state before starting the next.

Recommended sequence:

1. `private-web-security-rag-assistant`
2. `mern-contact-management-system`
3. `python-design-patterns`
4. `flask-task-manager`
5. `fastapi-data-aggregation-api`
6. `nextjs-data-visualization-dashboard`
7. `numerical-methods-python`
8. `cloud-security-labs`
9. `data-engineering-university-labs`
10. `business-intelligence-dashboard`
11. `digital-transformation-coursework`
12. Final profile README refresh

## Testing and Validation

- Python projects: use `pytest` for core logic/API tests where practical.
- JavaScript/TypeScript projects: use the project's test runner and verify build/type-check commands.
- APIs: verify at least health/basic CRUD or aggregation paths.
- Frontend projects: verify production build succeeds and key flows render without console-breaking errors.
- Documentation/coursework repositories: verify links/assets resolve and README accurately describes contents.
- Before publishing reconstructed work, compare the implementation against the recovered coursework description to ensure fidelity.

## GitHub Constraints

The connected GitHub tool currently exposes repository/file/branch/commit operations but does not expose a create-repository action. Therefore, repository creation itself may require one manual GitHub step per new repository unless that capability becomes available. Once an empty repository exists and is accessible to the connector, the repository can be populated and maintained through the connected GitHub actions.

Existing repositories must not be overwritten or repurposed merely to avoid this limitation unless the user explicitly approves doing so.

## Success Criteria

The project is complete when:

- All eleven approved repository concepts exist on the user's GitHub account.
- Each repository contains real code/artifacts consistent with the university task.
- Missing code has been reconstructed faithfully and disclosed.
- Coding repositories run/build and their core tests pass.
- README files are recruiter-friendly and technically accurate.
- The GitHub profile README highlights the strongest work.
- No secrets or private academic data are published.
