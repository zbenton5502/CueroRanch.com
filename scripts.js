document.addEventListener('DOMContentLoaded', () => {
    // Function to load HTML files into divs
    const loadSection = async (id, file) => {
        console.log(`Attempting to load ${file} into #${id}`);
        try {
            const response = await fetch(file);
            if (!response.ok) {
                throw new Error(`Failed to load ${file}: ${response.status} ${response.statusText}`);
            }
            const html = await response.text();
            document.getElementById(id).innerHTML = html;
            console.log(`Successfully loaded ${file} into #${id}`);
        } catch (error) {
            console.error(error);
            document.getElementById(id).innerHTML = `<p>Error loading ${file}. Check console for details.</p>`;
        }
    };

    // Load each section with relative paths
    loadSection('nav', './nav.html');
    loadSection('hero', './hero.html');
    loadSection('gallery', './gallery.html');
    loadSection('details', './details.html');
    loadSection('contact', './contact.html');
    loadSection('location', './location.html');
});