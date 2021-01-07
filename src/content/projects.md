Ain't got nothing here.

```tsx
// Markup
export const Header: React.FC = () => {
    return (
        <NavBar>
            <Home to="/">
                <Logo />
            </Home>
            <Links>
                <TopLink to="/blog">Blog</TopLink>
                <TopLink to="/projects">Projects</TopLink>
            </Links>
        </NavBar>
    );
};
```
