<script>
  import { fadeUp } from '../animate.js';
</script>

<section class="comparison">
  <div class="container">
    <h2 use:fadeUp>Why Teams Choose SnapBuild</h2>
    <p class="subtitle" use:fadeUp={{delay: 100}}>What you get is not an editor, but a result: ready-made marketing materials without any hassle with settings.</p>
    
    <div class="table-wrapper" use:fadeUp={{delay: 200}}>
      <table class="comp-table">
        <thead>
          <tr>
            <th>Peculiarities</th>
            <th class="highlight">snapbuild</th>
            <th>Claude + Figma MCP</th>
            <th>No-code platforms</th>
            <th>Cursor</th>
            <th>Traditional</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Time-to-market</td>
            <td class="highlight">5 minutes</td>
            <td>30-60 min</td>
            <td>2-3 days</td>
            <td>1-2 days</td>
            <td>3-5 weeks</td>
          </tr>
          <tr>
            <td>Design system</td>
            <td class="highlight">100% accuracy</td>
            <td>Partially from Figma</td>
            <td>Templates</td>
            <td>Manually in code</td>
            <td>Manually, through review</td>
          </tr>
          <tr>
            <td>Visual editor</td>
            <td class="highlight">
              <span class="check">✓</span> + AI
            </td>
            <td>—</td>
            <td><span class="check">✓</span></td>
            <td>—</td>
            <td>—</td>
          </tr>
          <tr>
            <td>Required skills</td>
            <td class="highlight">No</td>
            <td>Prompts + code</td>
            <td>Design</td>
            <td>Development</td>
            <td>Full team</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<style>
  .comparison {
    padding: 120px 0;
    background: #fdfdfd;
  }
  h2 {
    font-size: 3rem;
    margin-bottom: 16px;
  }
  .subtitle {
    font-size: 1.25rem;
    margin-bottom: 60px;
    max-width: 700px;
  }
  .table-wrapper {
    overflow-x: auto;
    background: white;
    border-radius: 32px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.04);
    padding: 4px;
    border: 1px solid var(--border-color);
  }
  .comp-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    min-width: 900px;
  }
  .comp-table th, .comp-table td {
    padding: 24px 32px;
    text-align: left;
    border-bottom: 1px solid var(--border-color);
  }
  .comp-table th {
    font-weight: 600;
    font-size: 1.15rem;
    color: #111;
    padding-top: 32px;
  }
  .comp-table td {
    color: var(--secondary);
    font-size: 1.05rem;
  }
  .comp-table tr:last-child td {
    border-bottom: none;
    padding-bottom: 32px;
  }
  
  .highlight {
    background-color: #fffafb; 
    position: relative;
  }
  th.highlight {
    color: #e83e8c;
    font-weight: 700;
  }
  td.highlight {
    color: #111;
    font-weight: 600;
  }
  
  .check {
    color: #e83e8c;
    font-weight: bold;
  }
  
  /* Outline for the highlight column */
  .comp-table tr:first-child th.highlight {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-top: 2px solid #ff6b6b;
    border-left: 2px solid #ff6b6b;
    border-right: 2px solid #ff6b6b;
    background: linear-gradient(180deg, #fff0f5 0%, #fffafb 100%);
  }
  .comp-table td.highlight {
    border-left: 2px solid #ff6b6b;
    border-right: 2px solid #ff6b6b;
  }
  .comp-table tr:last-child td.highlight {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom: 2px solid #ff6b6b;
  }
</style>
