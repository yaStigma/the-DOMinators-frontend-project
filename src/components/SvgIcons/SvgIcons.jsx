export default function SvgIcons({ name }) {
  const icons = {
    arrow: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 11V12.5C2 12.8978 2.15804 13.2794 2.43934 13.5607C2.72064 13.842 3.10218 14 3.5 14H12.5C12.8978 14 13.2794 13.842 13.5607 13.5607C13.842 13.2794 14 12.8978 14 12.5V11M5 5L8 2M8 2L11 5M8 2V11"
          stroke="#407BFF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    close: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 18L18 6M6 6L18 18"
          stroke="#407BFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    eyeSlash: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.65331 5.482C2.02961 6.21812 1.56518 7.07547 1.28931 8C2.15064 10.892 4.82931 13 7.99997 13C8.66197 13 9.30197 12.908 9.90864 12.7367M4.15197 4.152C5.29372 3.39854 6.63202 2.99788 7.99997 3C11.1706 3 13.8486 5.108 14.71 7.99867C14.2379 9.5782 13.2246 10.941 11.848 11.848M4.15197 4.152L1.99997 2M4.15197 4.152L6.58531 6.58533M11.848 11.848L14 14M11.848 11.848L9.41464 9.41467C9.60037 9.22893 9.7477 9.00844 9.84822 8.76577C9.94874 8.52309 10.0005 8.263 10.0005 8.00033C10.0005 7.73767 9.94874 7.47757 9.84822 7.2349C9.7477 6.99223 9.60037 6.77173 9.41464 6.586C9.22891 6.40027 9.00841 6.25294 8.76574 6.15242C8.52307 6.0519 8.26297 6.00016 8.00031 6.00016C7.73764 6.00016 7.47755 6.0519 7.23487 6.15242C6.9922 6.25294 6.77171 6.40027 6.58597 6.586M9.41397 9.414L6.58664 6.58667"
          stroke="#407BFF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    eye: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.35726 8.21467C1.31125 8.07639 1.31125 7.92694 1.35726 7.78867C2.28193 5.00667 4.90659 3 7.99993 3C11.0919 3 13.7153 5.00467 14.6419 7.78533C14.6886 7.92333 14.6886 8.07267 14.6419 8.21133C13.7179 10.9933 11.0933 13 7.99993 13C4.90793 13 2.28393 10.9953 1.35726 8.21467Z"
          stroke="#407BFF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 8C10 8.53043 9.78929 9.03914 9.41421 9.41421C9.03914 9.78929 8.53043 10 8 10C7.46957 10 6.96086 9.78929 6.58579 9.41421C6.21071 9.03914 6 8.53043 6 8C6 7.46957 6.21071 6.96086 6.58579 6.58579C6.96086 6.21071 7.46957 6 8 6C8.53043 6 9.03914 6.21071 9.41421 6.58579C9.78929 6.96086 10 7.46957 10 8Z"
          stroke="#407BFF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    settings: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.39597 2.62667C6.45597 2.26533 6.76931 2 7.13597 2H8.86464C9.23131 2 9.54464 2.26533 9.60464 2.62667L9.74664 3.48067C9.78864 3.73 9.95531 3.938 10.1766 4.06067C10.226 4.08733 10.2746 4.116 10.3233 4.14533C10.5393 4.276 10.8033 4.31667 11.04 4.228L11.8513 3.924C12.0176 3.86147 12.2006 3.85999 12.3679 3.91981C12.5352 3.97963 12.6757 4.09688 12.7646 4.25067L13.6286 5.74867C13.7173 5.90247 13.7486 6.08275 13.7169 6.25744C13.6851 6.43213 13.5924 6.5899 13.4553 6.70267L12.7866 7.254C12.5913 7.414 12.4946 7.66267 12.4993 7.91533C12.5004 7.972 12.5004 8.02867 12.4993 8.08533C12.4946 8.33733 12.5913 8.58533 12.786 8.74533L13.456 9.29733C13.7386 9.53067 13.812 9.93333 13.6293 10.2507L12.764 11.7487C12.6752 11.9024 12.5348 12.0197 12.3676 12.0796C12.2005 12.1396 12.0176 12.1383 11.8513 12.076L11.04 11.772C10.8033 11.6833 10.54 11.724 10.3226 11.8547C10.2743 11.8841 10.2254 11.9125 10.176 11.94C9.95531 12.062 9.78864 12.27 9.74664 12.5193L9.60464 13.3727C9.54464 13.7347 9.23131 14 8.86464 14H7.13531C6.76864 14 6.45531 13.7347 6.39531 13.3733L6.25331 12.5193C6.21197 12.27 6.04531 12.062 5.82397 11.9393C5.77454 11.9121 5.72564 11.8838 5.67731 11.8547C5.46064 11.724 5.19731 11.6833 4.95997 11.772L4.14864 12.076C3.98246 12.1383 3.79955 12.1397 3.63244 12.0799C3.46533 12.0201 3.32485 11.903 3.23597 11.7493L2.37131 10.2513C2.2826 10.0975 2.25134 9.91725 2.28308 9.74256C2.31482 9.56787 2.4075 9.4101 2.54464 9.29733L3.21397 8.746C3.40864 8.586 3.50531 8.33733 3.50064 8.08467C3.4996 8.028 3.4996 7.97133 3.50064 7.91467C3.50531 7.66267 3.40864 7.41467 3.21397 7.25467L2.54464 6.70267C2.40767 6.58993 2.31509 6.43229 2.28336 6.25775C2.25162 6.08321 2.28278 5.90307 2.37131 5.74933L3.23597 4.25133C3.32477 4.09742 3.46532 3.98004 3.63258 3.92009C3.79985 3.86014 3.98297 3.86153 4.14931 3.924L4.95997 4.228C5.19731 4.31667 5.46064 4.276 5.67731 4.14533C5.72531 4.116 5.77464 4.08733 5.82397 4.06C6.04531 3.938 6.21197 3.73 6.25331 3.48067L6.39597 2.62667Z"
          stroke="#407BFF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 8C10 8.53043 9.78929 9.03914 9.41421 9.41421C9.03914 9.78929 8.53043 10 8 10C7.46957 10 6.96086 9.78929 6.58579 9.41421C6.21071 9.03914 6 8.53043 6 8C6 7.46957 6.21071 6.96086 6.58579 6.58579C6.96086 6.21071 7.46957 6 8 6C8.53043 6 9.03914 6.21071 9.41421 6.58579C9.78929 6.96086 10 7.46957 10 8Z"
          stroke="#407BFF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    logout: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 6V3.5C10.5 3.10218 10.342 2.72064 10.0607 2.43934C9.77936 2.15804 9.39782 2 9 2H5C4.60218 2 4.22064 2.15804 3.93934 2.43934C3.65804 2.72064 3.5 3.10218 3.5 3.5V12.5C3.5 12.8978 3.65804 13.2794 3.93934 13.5607C4.22064 13.842 4.60218 14 5 14H9C9.39782 14 9.77936 13.842 10.0607 13.5607C10.342 13.2794 10.5 12.8978 10.5 12.5V10M12.5 10L14.5 8M14.5 8L12.5 6M14.5 8H6"
          stroke="#407BFF"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return icons[name] || null;
}