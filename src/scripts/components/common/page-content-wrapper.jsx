import '../../../styles/components/common/page-content-wrapper.scss';

const PageContentWrapper = ({ children, className = '' }) => {
    const combinedClassName = `page-content-wrapper ${className}`;

    return (
        <main className={combinedClassName}>
            {children}
        </main>
    );
};

export default PageContentWrapper;