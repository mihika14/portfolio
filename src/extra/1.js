<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage />}>
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/education" element={<Education />} />
    <Route path="/skills" element={<Skills />} />
  </Route>
</Routes>
</BrowserRouter>
